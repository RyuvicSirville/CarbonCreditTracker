
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import arrow from '/img/arrow.png';
import Contact from './Contact';
export default function CCgenerate() {
    return (

        <div>
            <br>
            </br>
            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   xl:grid-cols-3   gap-10 px-20 w-screen mx-auto">
                <div class="justify-self-center border-double border-4 border-grey-900  px-10 py-10  ">
                    <Card class ="shadow-2xl " style={{ width: '25rem', background: 'transparent', boxShadow: 'none' }}>

                        <div class="">
                            
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8bEq4PwgTO2m6MLB1K9PYwVX2FkkpCc09Q&s" />
                            <Card.Body>
                            <p class='text-4xl text-white font-bold'>Land To CarbonCredit</p>
                                
                                <br></br>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Landsize In Hectre</InputGroup.Text>
                                    <Form.Control aria-label="With textarea" />
                                </InputGroup>
                                <div class='text-white  antialiased font-semi-bold text-2xl    hover:font-bold'>Climate Condition</div>
                                <Form.Select className="mb-3">
                                    <option>Choose Climate Contion</option>
                                    <option>Semi-arid</option>
                                    <option>Sub - humid</option>
                                    <option>Moist sub-humid	</option>
                                    <option>Humid	</option>
                                </Form.Select>
                                <div class='text-white  antialiased font-semi-bold  text-2xl   hover:font-bold'>Soil Condition</div>
                                <Form.Select className="mb-3">
                                    <option>Choose Soil Type</option>
                                    <option>Sandy soils</option>
                                    <option>Medium soil</option>
                                    <option>Heavy (clay) soils	</option>
                                </Form.Select>
                                <div class='grid grid-cols-2 gap-5'>
                                </div>

                            </Card.Body>
                        </div>

                    </Card>
                </div>

                <div >
                    <div class="grid grid-rows-3 px-5 ">
                        <div class="row-start-2  px-20">
                            <button class=""><img class=" size-32" src={arrow}></img></button>
                            <div class="text-centre px-4 text-white font-bold">CALCULATE</div>
                        </div>

                    </div>

                </div>
                <div class="     ">
                   

                        <div class="grid grid-rows-3 px-2 px-10 py-10 shadow-2xl border-double border-4 border-grey-900 ">
                            <div class=""><p class='text-centre px-14 text-white font-bold text-5xl' >User Revenue</p></div>
                            

                            <table class="row-start-2 border-separate border-spacing-2 border border-slate-500 ...">
                                <thead>
                                    <tr>
                                        <th class="border border-slate-600 text-centre text-white text-xl">Type</th>
                                        <th class="border border-slate-600 text-centre text-white text-xl">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-slate-700 text-centre text-white font-bold text-xl">Number of trees planted</td>
                                        <td class="border border-slate-700 text-centre text-white font-bold text-xl">32000</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-slate-700 text-centre text-white font-bold text-xl">CO2 Absorption in MtTon</td>
                                        <td class="border border-slate-700 text-centre text-white font-bold text-xl ">1235</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-slate-700 text-centre text-white font-bold text-xl">Carbon Credit Equivalent</td>
                                        <td class="border border-slate-700 text-centre text-white font-bold text-xl">1235</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    
                </div>

            </div >
<br></br>

<Contact></Contact>
        </div >
    )
}