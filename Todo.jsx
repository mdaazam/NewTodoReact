import React,{ useState } from 'react';

const Todo = (props) => {
    const intialValue = {
            userId: "",
            id: "",
            title: "",
            completed: "",
            
    }
    const [fill, setFill] = useState(intialValue);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name)
        console.log(fill)
        setFill({
            ...fill,
            [name]: value
        })
    }
    const handleSubmit = () => {
        const {userId, id, title, completed} = fill;
        if(userId && id && title && completed){
            setFill({
                ...fill,
                formError:"TODO Submitted"
            })
            props.addPerson(fill)
        }else{
            setFill({
                ...fill,
                formError:"Please Fill All The Fields."
            })
        }
    }


    return(
        <>
            <div><small>{fill.formError}</small></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="userId" className="form-label">User Id</label>
                      <input type="text" className="form-control" id="" name="userId" value={fill.userId} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="id" className="form-label">ID</label>
                      <input type="id" className="form-control" id="" name="id"  value={fill.id} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label"> Title</label>
                      <input type="text" className="form-control" id="" name="title"  value={fill.title} onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="completed" className="form-label">Completed</label>
                      <input type="text" className="form-control" id="" name="completed" value={fill.completed} onChange={handleChange} />
                    </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </>
    );
}
export default Todo;