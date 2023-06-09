import PersonalInfo from "../PersonalInfo/PersonalInfo";
import './Todos.css';

const Todos = (props) => {
    // console.log('Logged props in todos: ', props);

    const todosData = [
        {
            id: "1",
            title: "Walk the dog",
            isDone: true
        },
        {
            id: "2",
            title: "Wash the dishes",
            isDone: false
        }, {
            id: "3",
            title: "Do the react homework",
            isDone: false
        }, {
            id: "4",
            title: "Watch favourite tv show",
            isDone: true
        }
    ];


    return (
        <section className="todosContainer">
            <h3>{props.message}</h3>
            <p>{props.description}</p>

            <PersonalInfo fullName="John Doe" message="This todos are for" color="green" />

            <div className="todosList">
                {
                    todosData.map((todo, index) => (
                        <div key={index}>
                            <h4>Title: {todo.title}</h4>
                            <p style={{
                                color: todo.isDone ? "green" : "red"
                            }} >
                                {todo.isDone ? 'This todo is done' : 'Todo is not done'}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};


export default Todos;