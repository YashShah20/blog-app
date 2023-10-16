const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comment");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.use("/images", express.static("images"));

// var docxConverter = require("docx-pdf");

// docxConverter("./images/invoice.docx", "./output.pdf", function (err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("result" + result);
// });

var pdf = require("html-pdf");

const html = `<h1 style="text-align: right;"><img style="font-size: 14px; float: left;" src="https://logo.clearbit.com/google.com?size=500" alt="My alt text" width="150" height="150" />Argusoft India</h1>
<p style="text-align: right;">Gandhinagar</p>
<p style="text-align: right;">Gujarat - India</p>
<p style="text-align: right;"><strong>Pincode: </strong>385245</p>
<p style="text-align: left;">Bill To,</p>
<h1>Linktype,</h1>
<p>Michigan - United States</p>
<p>&nbsp;</p>
<p><strong>Invoice</strong> #1520</p>
<p><strong>Issue date</strong>: 07-04-2023</p>
<p><strong>Due date</strong>: 07-04-2023<br /><br /></p>
<p><strong>Project: </strong>Web-Based HR Management Tool</p>
<p>&nbsp;</p>
<p style="text-align: right;"><strong>Invoice Duration</strong>: <em>2023-01-01</em> to <em>2023-04-30</em></p>
<p><strong>&nbsp;</strong></p>
<table style="border-collapse: collapse; width: 100.469%; background-color: #C2E0F4; border-color: #000000; border-style: solid;" border="1">
<tbody>
<tr>
<td style="width: 25.4138%; border-color: #000000;" width="179">
<p><strong>Service</strong></p>
</td>
<td style="width: 25.5127%; border-color: #000000;" width="179">
<p><strong>Resource</strong></p>
</td>
<td style="width: 11.1742%; text-align: center; border-color: #000000;" width="78">
<p><strong>Days</strong></p>
</td>
<td style="width: 11.3719%; text-align: center; border-color: #000000;" width="78">
<p><strong>Daily Hours</strong></p>
</td>
<td style="width: 15.8218%; text-align: center; border-color: #000000;" width="78">
<p><strong>Rate</strong></p>
</td>
<td style="width: 10.6797%; border-color: #000000;">
<p style="text-align: center;"><strong>Amount</strong></p>
</td>
</tr>
<tr>
<td style="width: 25.4138%; border-color: #000000;" width="179">
<p><strong>Machine Learning (ML)</strong></p>
</td>
<td style="width: 25.5127%; border-color: #000000;" width="179">
<p>Early Stamps</p>
</td>
<td style="width: 11.1742%; text-align: center; border-color: #000000;" width="78">
<p>67</p>
</td>
<td style="width: 11.3719%; text-align: center; border-color: #000000;" width="78">
<p>9</p>
</td>
<td style="width: 15.8218%; text-align: center; border-color: #000000;" width="78">
<p>705</p>
</td>
<td style="height: 14.4pt; width: 10.6797%; text-align: center; border-color: #000000;" align="right" width="64" height="19">425115</td>
</tr>
<tr>
<td style="width: 25.4138%; border-color: #000000;" width="179">
<p><strong>Internet of Things (IoT)</strong></p>
</td>
<td style="width: 25.5127%; border-color: #000000;" width="179">
<p>Nancey Simonard</p>
</td>
<td style="width: 11.1742%; text-align: center; border-color: #000000;" width="78">
<p>9</p>
</td>
<td style="width: 11.3719%; text-align: center; border-color: #000000;" width="78">
<p>8</p>
</td>
<td style="width: 15.8218%; text-align: center; border-color: #000000;" width="78">
<p>690</p>
</td>
<td style="height: 14.4pt; width: 10.6797%; text-align: center; border-color: #000000;" align="right" height="19">49680</td>
</tr>
<tr>
<td style="width: 25.4138%; border-color: #000000;" width="179">
<p><strong>Internet of Things (IoT)</strong></p>
</td>
<td style="width: 25.5127%; border-color: #000000;" width="179">
<p>Luca Rudolf</p>
</td>
<td style="width: 11.1742%; text-align: center; border-color: #000000;" width="78">
<p>56</p>
</td>
<td style="width: 11.3719%; text-align: center; border-color: #000000;" width="78">
<p>8</p>
</td>
<td style="width: 15.8218%; text-align: center; border-color: #000000;" width="78">
<p>750</p>
</td>
<td style="height: 14.4pt; width: 10.6797%; text-align: center; border-color: #000000;" align="right" height="19">336000</td>
</tr>
<tr>
<td style="width: 25.4138%; border-color: #000000;" width="179">
<p><strong>Machine Learning (ML)</strong></p>
</td>
<td style="width: 25.5127%; border-color: #000000;" width="179">
<p>Serge Walch</p>
</td>
<td style="width: 11.1742%; text-align: center; border-color: #000000;" width="78">
<p>51</p>
</td>
<td style="width: 11.3719%; text-align: center; border-color: #000000;" width="78">
<p>9</p>
</td>
<td style="width: 15.8218%; text-align: center; border-color: #000000;" width="78">
<p>720</p>
</td>
<td style="height: 14.4pt; width: 10.6797%; text-align: center; border-color: #000000;" align="right" height="19">330480</td>
</tr>
<tr>
<td style="width: 25.4138%; border-color: #000000;" width="179">
<p><strong>Cyber Security</strong></p>
</td>
<td style="width: 25.5127%; border-color: #000000;" width="179">
<p>Pall Francino</p>
</td>
<td style="width: 11.1742%; text-align: center; border-color: #000000;" width="78">
<p>35</p>
</td>
<td style="width: 11.3719%; text-align: center; border-color: #000000;" width="78">
<p>9</p>
</td>
<td style="width: 15.8218%; text-align: center; border-color: #000000;" width="78">
<p>735</p>
</td>
<td style="height: 14.4pt; width: 10.6797%; text-align: center; border-color: #000000;" align="right" height="19">231525</td>
</tr>
<tr>
<td style="width: 89.2944%; text-align: right; border-color: #000000;" colspan="5" width="545">
<p><strong>Sum Total</strong></p>
</td>
<td style="width: 10.6797%; text-align: center; border-color: #000000;" width="126">
<p>1372800</p>
</td>
</tr>
<tr>
<td style="width: 89.2944%; text-align: right; border-color: #000000;" colspan="5" width="545">
<p><strong>Tax</strong></p>
</td>
<td style="width: 10.6797%; text-align: center; border-color: #000000;" width="126">
<p>28 %</p>
</td>
</tr>
<tr>
<td style="width: 89.2944%; text-align: right; border-color: #000000;" colspan="5" width="545">
<p><strong>Amout Payable</strong></p>
</td>
<td style="width: 10.6797%; text-align: center; border-color: #000000;" width="126">
<p>1757184</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>`

const foo = (html) => {
  var options = {
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: "portrait",
    border: {
      top: "0.5in", // default is 0, units: mm, cm, in, px
      right: "0.5in",
      bottom: "0.5in",
      left: "0.5in",
    },
    base: "file:///E:/Argusoft/blog-app/backend/images/",
    // paginationOffset: 1, // Override the initial pagination number
    // header: {
    //   height: "45mm",
    //   contents: '<div style="text-align: center;">Author: Yash Shah</div>',
    // },
    // footer: {
    //   height: "28mm",
    //   contents: {
    //     first: "Cover page",
    //     2: "Second page", // Any page number is working. 1-based index
    //     default:
    //       '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //     last: "Last Page",
    //   },
    // },
  };
  pdf.create(html, options).toFile("output.pdf", function (err, res) {
    if (err) {
      callback(err);
      console.log(err);
      return;
    }
    console.log(res);
    // callback(null, res);
  });
};

foo(html);

app.listen(5000, () => {
  console.log(`app is running at port 3000`);
});

