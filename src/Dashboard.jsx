import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Tracking from './Tracking'
import Contact from './Contact';
export default function Dashboard() {
    return (
        <div class='	'>
            <p class=" py-10 px-20 text-4xl md:text-5xl xl:text-7xl font-semi--bold text-white" style={{ display: "flex", textAlign: "center" }}>User Dashboard</p>
            <div class='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2   gap-10 px-20 w-screen mx-auto' >
            <div class=' justify-self-center'>
                <div class="shadow-2xl backdrop-blur	">
                    <table class="border-separate border-spacing-2 border border-slate-500 ">
                        <thead>
                            <tr >
                                <th class="border border-slate-600 text-center text-gray-100 text-3xl">Source</th>
                                <th class="border border-slate-600 text-center text-gray-100 text-3xl">Carbon Emmisons </th>
                                <th class="border border-slate-600 text-center text-gray-100 text-3xl">Carbon Credit Equivalent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">Home Appliances</td>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">2274</td>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">2</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">Vehicles</td>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">4673</td>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">4</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">Others</td>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">1258</td>
                                <td class="border border-slate-700 text-center text-gray-100 text-2xl">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class=' justify-self-center 	'>

                <PieChart 
                    series={[
                        {
                            data: [
                                { id: 0, value: 56, label: 'From Vehicles' },
                                { id: 1, value: 27, label: 'From Appliances' },
                                { id: 2, value: 16, label: 'From Others' },
                            ],
                        },
                    ]}
                    width={500}
                    height={200}
                />
            </div>

        </div>
        <Tracking></Tracking>
        <br></br>
<br></br>
<Contact></Contact>
        </div>
        

    );
}
