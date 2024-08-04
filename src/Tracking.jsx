import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ha from '/img/HAdownload.jpeg'
import va from '/img/Vdownload.png'
import InputGroup from 'react-bootstrap/InputGroup';
function Tracking() {
    return (
        <div >
            <br></br>
            <div class='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2   gap-10 px-20 w-screen mx-auto'>
                <div class='backdrop-blur	 px-10 py-10 justify-self-center shadow-2xl border-double border-4 border' >
                    <Card style={{ width: '25rem', background: 'transparent', boxShadow: 'none' }}>
                        <Card.Img variant="top" src={ha} />
                        <Card.Body>
                            <p class='text-4xl text-white font-semi-bold hover:font-bold mb-3' >Home Appliances Monitoring</p>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Appliance Name</InputGroup.Text>
                                <Form.Control aria-label="With textarea" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Watt in KJ</InputGroup.Text>
                                <Form.Control aria-label="With textarea" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Monthly Usage Time in Hr</InputGroup.Text>
                                <Form.Control aria-label="With textarea" />
                            </InputGroup>
                            <div class='grid grid-cols-2 gap-5'>
                                <Button variant="dark">Add New</Button>
                                <Button variant="dark">Add to List</Button>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <div class='backdrop-blur px-10 py-10 justify-self-center shadow-2xl border-double border-4 border-grey-900'>
                    <Card style={{ width: '25rem', background: 'transparent', boxShadow: 'none' }}>
                        <Card.Img variant="top" src={va} />
                        <Card.Body>

                            <p class='text-4xl text-white font-semi-bold hover:font-bold mb-3' >Vehicular Emissions Monitoring</p>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Vehicle Type</InputGroup.Text>
                                <Form.Control aria-label="With textarea" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Fuel Amount in L </InputGroup.Text>
                                <Form.Control aria-label="With textarea" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Emissions Factor </InputGroup.Text>
                                <Form.Control aria-label="With textarea" />
                            </InputGroup>

                            <div class='grid grid-cols-2 gap-5'>
                                <Button variant="dark">Add New</Button>
                                <Button variant="dark">Add to List</Button>
                            </div>

                        </Card.Body>
                    </Card>
                </div>


            </div>
        </div >
    )
}
export default Tracking;