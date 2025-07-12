import React, { useState } from 'react'
import { Input, Button } from "../Index"

const Compound = () => {

    const [principal, setPrincipal] = useState("")
    const [rate, setRate] = useState("")
    const [year, setYear] = useState("")
    const [result, setResult] = useState("")

    const compound = () => {
        const principalAmount = parseFloat(principal)
        const annualRate = parseFloat(rate)
        const timeInYear = parseFloat(year)

        //input validation

        if (isNaN(principalAmount) || isNaN(annualRate) || isNaN(timeInYear)) {
            setResult("Please Valid Number.");
            return;
        }

        if (principal < 0 || annualRate < 0 || timeInYear < 0) {
            setResult("Value must be non-nagtive.")
            return;
        }

        const amount = principalAmount * Math.pow(1 + annualRate, timeInYear);
        const formattedAmount = amount.toFixed(2);

        if (!isNaN(formattedAmount)) {
            setResult(formattedAmount)
        }

        setPrincipal("")
        setRate("")
        setYear("")

    }


    return (
        <>
            <div className='w-full flex items-center
        flex-col mt-[120px]'>
                <div className='flex gap-[20px] c-wrapper'>
                    <div className='flex gap-[20px] com'>
                        <Input
                            value={principal}
                            change={(e) => setPrincipal(e.target.value)}
                            text={"number"}
                            holder={"Principal Amount"}
                            style={"input-res text-[#ffffff] text-[22px] placeholder:text-[#ffffff] outline-0 border-1 rounded-[50px] border-[#ffffff1f] px-[25px] py-[15px]"}
                        />

                        <Input
                            value={rate}
                            change={(e) => setRate(e.target.value / 100)}
                            text={"number"}
                            holder={"Rate"}
                            style={"input-res text-[#ffffff] text-[22px] placeholder:text-[#ffffff] outline-0 border-1 rounded-[50px] border-[#ffffff1f] px-[25px] py-[15px]"}
                        />

                        <Input
                            value={year}
                            change={(e) => setYear(e.target.value)}
                            text={"number"}
                            holder={"year"}
                            style={"input-res text-[#ffffff] text-[22px] placeholder:text-[#ffffff] outline-0 border-1 rounded-[50px] border-[#ffffff1f] px-[25px] py-[15px]"}
                        />
                    </div>
                    <div>
                        <Button
                            click={compound}
                            title='Calculate'
                            style={"btn-res text-[#ffffff] outline-0 border-1 rounded-[50px] border-[#ffffff1f] px-[30px] text-[22px] py-[15px]"}
                        />
                    </div>
                </div>
                <div className='mt-[80px]'>
                    <h1 className='result text-[#ffffff] font-[500] text-[32px]'>Total is = {result}</h1>
                </div>
            </div>
        </>
    )
}

export default Compound