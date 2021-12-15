import {Link, useParams} from "react-router-dom";
import {Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";

const MonsterPage = () => {

    const params = useParams();
    const [user, setUser] = useState({});
    const getMonsters = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }
    useEffect(() => {
        getMonsters();
    }, []);



    return(
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <img src={'https://robohash.org/' + user.username} alt='avatar'/>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Title>{user.username}</Card.Title>
                        {/*<Card.Title>{user.website}</Card.Title>*/}
                        <Card.Title>{user.email}</Card.Title>
                        <Card.Title>{user.phone}</Card.Title>
                        <Link to='/'>Return to HOME</Link>
                    </Card.Body>


                </Card>
            </Container>

        </div>
    )
}
export default MonsterPage