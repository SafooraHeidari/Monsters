import {useState, useEffect} from "react";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import MonsterCard from "../MonsterCard/MonsterCard";
import {Link} from "react-router-dom";

const MonsterList = () => {
    const [monsterList, setMonsterList] = useState([]);
    const [monsterfilter, setMonsterFilter] = useState('');

    const getMonsters = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setMonsterList(data));
    }

    useEffect(() => {
        document.title = 'Monsters List';
        getMonsters();
    }, []);

    return (
        <div>
            <Container className='mt-3'>
                <Row className='mt-3'>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Monster name"
                                aria-label="Monster name"
                                aria-describedby="basic-addon2"
                                onChange={e => setMonsterFilter(e.target.value)}
                            />
                            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    {monsterList.filter(item => item.name.toLowerCase().includes(monsterfilter.toLowerCase())).length === 0 ?
                        <h1 className='text-center'>There is no monster with this name</h1> :
                        monsterList.filter(item => item.name.toLowerCase().includes(monsterfilter.toLowerCase()))
                        .map(item => (
                            <Col className='mt-3' key={item.id} xs={12} sm={6} md={4} lg={3}>
                                <Link to={`/${item.id}`}>
                                    <MonsterCard name={item.name}
                                    description={item.email}
                                    image={'https://robohash.org/' + item.username}/>
                                </Link>
                            </Col>))}
                </Row>
            </Container>


        </div>
    )
}

export default MonsterList