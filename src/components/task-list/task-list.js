import Task from '../task';


const TaskList = ({todos, oneDeleted}) => {

  const elements = todos.map(item => {

    return (
      <Task label={item.label} timeOut={item.timeOut} key={item.id} 
      oneDeleted={() => oneDeleted(item.id)}></Task>
    );
  });

  return (
    <section className='main'>
      <ul className='todo-list'>
        {elements}
      </ul>
    </section>
  );
};

export default TaskList;