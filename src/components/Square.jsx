import React, { useState } from 'react'
import { Button, Input } from "../Index"

const Square = () => {

    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    const square = () => {

        const number = Number(value);

        if (!isNaN(number)) {
            setResult(number * number)
        }

        setValue("")

    }

    return (
        <div className='w-full flex items-center
        flex-col mt-[120px]'>
            <div className='flex gap-[20px] i-wrapper'>
                <div>
                    <Input
                        value={value}
                        change={(e) => setValue(e.target.value)}
                        text={"number"}
                        holder={"Give Number"}
                        style={"input-res text-[#ffffff] text-[22px] placeholder:text-[#ffffff] outline-0 border-1 rounded-[50px] border-[#ffffff1f] px-[30px] py-[15px]"}
                    />
                </div>
                <div>
                    <Button
                        click={square}
                        title='Calculate'
                        style={"btn-res text-[#ffffff] outline-0 border-1 rounded-[50px] border-[#ffffff1f] px-[30px] text-[22px] py-[15px]"}
                    />
                </div>
            </div>
            <div className='mt-[80px]'>
                <h1 className='result text-[#ffffff] font-[500] text-[32px]'>Square is = {result}</h1>
            </div>
        </div>
    )

}

export default Square