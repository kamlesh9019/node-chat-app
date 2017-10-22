var generateMessage=(from,text)=>{
  return{
    from,
    text,
    createedAt:new Date().getTime()
  };
};

module.exports={generateMessage}
