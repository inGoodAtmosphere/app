const sendMail = require('../../../api_modules/mailSender.js')

export default async (req, res) => {
  if(req.method==="POST"){
    // TODO check if subject is set
    // TODO check if name is set
    // TODO check if content is set
    // TODO check if email adress is set
    const recipient = "ingoodatmosphere@gmail.com";
    // let recipient;
    const plainContent =`Od:${req.body.name} adres email: ${req.body.email} ${req.body.content}`;
    const errors = await sendMail(recipient, `Kontakt: ${req.body.subject}`, plainContent, `${req.body.name} do`).catch((error)=>{
      res.json({mesage: "We have encountered an error",
    error})
    });
    console.log(errors);
    if(!errors||errors.length>0){
      res.json({
        message: "Napotkaliśmy jakiś problem, spróbuj ponownie później",
        errors
      })
    }
    else {
      res.json({message:"Your email has been sent succesfully"});
    }
  }else {
    res.status(403);
    res.end();
  }
}