var expect=require('expect');

var {generateMessage}=require('./message')

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{

    var from ='jen';
    var text='some message';
    var message=generateMessage(from,text);

    expect(message.createedAt).toBeA('number');
    expect(message).toInclude({from,text});

  });
});
