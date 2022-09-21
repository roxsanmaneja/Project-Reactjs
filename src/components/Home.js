import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){
    const [Title, settitle] = useState("");
    const [genre, setgenre] = useState("");
    const [writer, setwriter] = useState("");
    const [singer, setsinger] = useState("");
    const [musics, setmusics] = useState([
        {
            id:"1", Title:"Tatsulok", genre:"Pinoy Rock", writer:"Rom Dongeto", singer:"Bamboo"
    
        },
        {
            id:"2", Title:"2022", genre:"Pop/Dance Electronic ", writer:"Anne-Marie", singer:"Anna-Marie"

        }]);
        const addMusic = () =>{
            const newMusic = {
                Title: Title, genre: genre, writer:writer, singer:singer,
            };
            setmusics((prev) => [...prev, newMusic]);
        }

    const handleDelete = (id ) => {
        setmusics(musics.filter(j => j.id !== id));
    };
    
    return(
        <div className="row m-5">
             <div className="card col-md-4 bg-light p-3">
            <div className="card-header bg-secondary">
            <h1>Add Music</h1>
            </div>
            <div className="card-body">
            <form className=" form-group d-grid gap-2">
                    <input className="form-control mb-3" type="text" placeholder="Enter Title" controlId="formTitle" 
                    required onChange={(e) => settitle(e.target.value)}>
                    </input>
                    <input className="form-control mb-3" type="text" placeholder="Enter Genre" controlId="formGenre" 
                    required onChange={(e) => setgenre(e.target.value)}>
                    </input>
                    <input className="form-control mb-3" type="text" placeholder="Enter Writer" controlId="formWriter" 
                    required onChange={(e) => setwriter(e.target.value)}>
                    </input>
                    <input className="form-control mb-3" type="text" placeholder="Enter Singer" controlId="formSinger" 
                    required onChange={(e) => setsinger(e.target.value)}>
                    </input>
                <button className="btn btn-success" onClick={addMusic}>Add</button>
            </form>
            </div>
        </div>
        <div className="col-md-8">
            <table className="table table-bordered border-dark p-3">
                <thead className="bg-secondary">
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Genre
                        </th>
                        <th>
                            Writer
                        </th>
                        <th>
                            Singer
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    musics.map((music, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    {music.Title}
                                </td>
                                <td>
                                    {music.genre}
                                </td>
                                <td>
                                    {music.writer}
                                </td>
                                <td>
                                    {music.singer}
                                </td>
                                <td><button className="btn btn-success" onClick={() => handleDelete(music.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}
 export default Home;