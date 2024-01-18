let counter = 0;

const Message = () => {
  console.log("Called", counter);

  counter++;
  return <div>Message {counter}</div>;
};

export default Message;
