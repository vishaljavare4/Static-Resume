import { GrUserManager } from "react-icons/gr";
const Profile = () => {
    return (
        <>
            <div className="flex mt-10 w-[50%] gap-14  ">
                <div className="flex flex-col items-center"> 
                    <div className="border-4 rounded-full border-solid border-fuchsia-900 p-2">
                        <GrUserManager className="text-4xl text-fuchsia-900"/>
                    </div>
                    <p className="font-semibold text-xl text-fuchsia-900">Profile</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-4xl font-semibold">Vishal</p>
                    <p className="text-4xl font-semibold">Javare</p>
                    <p className="text-2xl font-extralight">Full Stack Developer</p>
                </div>
                <div className="flex flex-col w-[90%] text-justify gap-4 ">
                    <p className="text-l">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident alias corrupti veniam eveniet soluta aperiam cum obcaecati molestias itaque maxime!
                    </p>
                    <div className="flex flex-col">
                        <p className="font-semibold text-sm">Email: <span className="font-regular">vishaljavare4@gmail.com</span></p>
                        <p className="font-semibold text-sm">Website: <span className="font-regular">www.MyWebsite.com</span></p>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Profile;