import Data from "../Models/Data";
import Sequence from "../Models/Sequence";
import Puppeteer from "puppeteer";
import ejs from "ejs";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  unlinkSync,
} from "fs";
import { execSync } from "child_process";

export default class DataController {
  // @desc Find All Users
  // @route GET /user/all
  // @access public

  async FindAll(req, res, next) {
    let result;

    try {
      result = await Data.find();
    } catch (e) {
      console.log(e);
    }

    if (!result || result.length === 0) {
      return res.render("user", { message: "NO DATA AVAILABLE" });
    }

    res.render("user", { message: "Data Found", data: result });
  }

  // @desc Find All Users
  // @route POST /user/addusers
  // @access public
  async AddUser(req, res, next) {
    const { name, phno } = req.body;
    let newdata;
    let seqId;
    let existing_number;

    try {
      existing_number = await Data.findOne({ phno: phno });
    } catch (err) {
      console.log(err);
    }

    if (existing_number) {
      return res.render("form", {
        message: "Data entry failed ,Phone-Number allready exist",
      });
    }

    if (phno.length !== 10) {
      return res.render("form", {
        message: "Data entry failed, enter 10 digits in PH NO",
      });
    }
    try {
      // Sequence Counter
      Sequence.findOneAndUpdate(
        {
          id: "autoVal",
        },
        { $inc: { seqNo: 1 } },
        { new: true },
        (err, update) => {
          if (update == null) {
            const newVal = new Sequence({ id: "autoVal", seqNo: 10001 });
            newVal.save();
            seqId = 10001;
          } else {
            seqId = update.seqNo;
          }

          // adding data
          newdata = new Data({ name, phno, token_no: seqId });
          newdata.save();
          // return success databse transaction

          if (err) return res.redirect("/", 400);
          else
            return res.render("form", {
              message: "Added Successfully !!,Enter again to add more",
              result: newdata ? newdata : "",
            });
        }
      );
    } catch (e) {
      console.log("Error Occured", e);
    }
  }

  // @desc Find All Users
  // @route POST /user/find
  // @access public

  async FindUser(req, res, next) {
    let result;
    const { start_d, end_d } = req.body;

    if (!start_d || !end_d)
      return res.render("user", { message: "ENTER DATES TO FILTER DATA !!" });

    // date conversion
    const start_date = new Date(start_d);
    const end_date = new Date(end_d);

    // finding numbers of the user
    try {
      result = await Data.find({
        date: {
          $gte: start_date.toISOString(),
          $lt: end_date.toISOString(),
        },
      });
    } catch (e) {
      console.log(e);
    }

    if (!result || result.length === 0) {
      return res.render("user", { message: "NO DATA FOUND" });
    }

    return res.render("user", {
      message: "DATA FOUND",
      data: result,
    });
  }

  // @desc create PDFs
  // @route POST /user/find
  // @access public

  async pdf(req, res, next) {
    let result;
    const dir = "./User-PDFs";

    try {
      result = await Data.find();
    } catch (e) {
      console.log(e);
    }

    if (!result || result.length === 0) {
      return res.render("user", { message: "NO DATA FOUND" });
    }

    if (existsSync("./User-PDFs/User_archive.zip"))
      unlinkSync("./User-PDFs/User_archive.zip");

    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    const files = readdirSync(dir + "/");

    if (result.length === files.length) {
      return res.render("user", {
        message: "PDFs Created and Ready to be Downloaded",
      });
    }

    if (result.length > 0) {
      result.forEach(async function (obj, ind) {
        try {
          if (ind <= files.length - 1) return;
          const browser = await Puppeteer.launch();
          const page = await browser.newPage();

          const printTemplate = "./views/print.ejs";

          const htmlString = readFileSync(printTemplate, "utf8").toString();

          await page.setContent(
            ejs.render(htmlString, { user: obj, data: ind + 1 })
          );

          await page.pdf({
            path: `User-PDFs/user_${ind + 1}.pdf`,
            format: "A4",
            printBackground: true,
          });
          await browser.close();
        } catch (e) {
          console.log("ERROR :", e);
        }
      });

      return res.render("user", {
        message: " PDFs Generated and Ready to be Downloaded",
      });
    }
  }

  // @desc download
  // @route POST /user/download
  // @access public

  async download(req, res, next) {
    const dir = "./User-PDFs";

    if (!existsSync(dir))
      return res.render("user", { message: "Generate PDFs first" });

    if (existsSync("./User-PDFs/User_archive.zip"))
      unlinkSync("./User-PDFs/User_archive.zip");

    const db = await Data.find();

    const files = readdirSync(dir + "/");

    if (db.length === files.length) {
      execSync(`zip -r User_archive *`, {
        cwd: dir,
      });
      return res.download("./User-PDFs/User_archive.zip");
    } else
      return res.render("user", {
        message:
          ` ${files.length} of ${db.length} PDfs Present !!` +
          ", hence Generate ALL PDFs First \n",
      });
  }
}
