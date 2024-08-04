import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CarbonPricesWidget from './CarbonPricesWidget';

export default function Trading() {
    return (
        <div>
            
            <div class="">
                <div class="px-20 py-10 justify-self-center ">
                    <CarbonPricesWidget></CarbonPricesWidget>
                </div>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 px-20 w-screen mx-auto">
                    <div class="backdrop-blur	px-{30px} justify-self-center shadow-2xl border-double border-4 border-grey-900">
                        <Card class="shadow-2xl " style={{ width: '25rem', background: 'transparent', boxShadow: 'none' }}>
                            <div class="px-10 py-10">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-cryptocurrency-concept_23-2149179724.jpg?w=996&t=st=1722670531~exp=1722671131~hmac=a789fa46536994bd19ed02f8906bf23cfbbc057857bf06ca3c093d6cb2dd1595" />
                                <br></br>
                                <p class='text-6xl text-white font-bold'>Wallet</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <p class='text-2xl text-white font-bold'>Your current CC :</p>
                                <br></br>
                                <br></br>
                                <p class='text-2xl text-white font-bold'> 2679</p>
                            </div>
                        </Card>
                    </div>
                    <div class='px-{30px} backdrop-blur justify-self-center shadow-2xl shadow-2xl border-double border-4 border-grey-900'>
                        <Card class="" style={{ width: '25rem', background: 'transparent', boxShadow: 'none' }}>
                            <div class="px-10 py-10">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-international-trade_23-2149176076.jpg?t=st=1722671715~exp=1722675315~hmac=5eba50d9807b82d62ad2c8f5cb6c155730dad2ecd9c25a10ffdec6732c2c8add&w=826" />
                                <br></br>
                                <p class='text-6xl text-white font-bold'>Trade Into</p>
                                <br></br>
                                <br></br>
                                <br></br>

                                <Button variant="dark text-4xl">Crypto</Button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Button variant="dark text-4xl">Stocks</Button>
                            </div>

                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}