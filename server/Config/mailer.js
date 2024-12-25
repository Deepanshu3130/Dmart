const nodemailer = require("nodemailer");

exports. mailSender = async(email , product) =>{
   try{
    const transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
            auth:{   
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
    });
    const info = await transporter.sendMail({
        from:`Dmart|| DEEPANSHU JOSHI`,
        to: `${email}`,
        subject : `Welcome to Price Tracking for ${product.title}`,
        html : `
        <div>
          <h2>Welcome to Dmart 🚀</h2>
          <p>You are now tracking ${product.title}.</p>
          <p>Here's an example of how you'll receive updates:</p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>${product.title} is back in stock!</h3>
            <p>We're excited to let you know that ${product.title} is now back in stock.</p>
            <p>Don't miss out - <a href="${product.url}" target="_blank" rel="noopener noreferrer">buy it now</a>!</p>
            <img src=${product.imgeUrl} alt="Product Image" style="max-width: 100%;" />
          </div>
          <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
        </div>
      `
    });
    console.log(info);
    return info


   }catch (error) {
    console.log(error);
    return {
        success: false,
        message: "Error sending email",
        error: error.message,
    }
  }
}