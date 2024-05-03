import { FaBriefcase } from "react-icons/fa";
const Work = () => {
    return (
        <>
        <div className="flex mt-10 w-[50%] gap-14 items-center ">
            <div className="flex flex-col items-center"> 
                <div className="border-4 rounded-full border-solid border-fuchsia-900 p-2">
                    <FaBriefcase className="text-4xl text-fuchsia-900"/>
                </div>
                <p className="font-semibold text-xl text-fuchsia-900">Work</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex gap-20 items-center justify-between">
                    <p className="text-xl font-semibold">Present</p>
                    <div className="flex flex-col">
                        <p className="font-semibold ">FirstDigiAdd . Digital Marketing</p>
                        <p className="font-regular text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vero.</p>
                    </div>
                </div>
                {/* <div className="flex gap-20 items-center justify-between">
                    <p className="text-xl font-semibold">2020</p>
                    <div className="flex flex-col">
                        <p className="font-semibold ">Google . SDE 1</p>
                        <p className="font-regular text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, animi?</p>
                    </div>
                </div> */}
                {/* <div className="flex gap-20 items-center justify-between">
                    <p className="text-xl font-semibold">2018</p>
                    <div className="flex flex-col">
                        <p className="font-semibold ">Apple . Front End Developer</p>
                        <p className="font-regular text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, veritatis.</p>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default Work;