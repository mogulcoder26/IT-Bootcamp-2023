"use client"
const page = () => {
    return (
        <div >
            <center >
                
                <form action="http://localhost:6969/register/profile/it/securev0" method="post" >
                <br />
                <br />
                <br /><label htmlFor="first">Full Name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="first" name="name" placeholder="eg : Soubhik Kumar"/>
                    <br />
                    <br />
                    <label htmlFor="last">Email :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="last" name="email" placeholder="eg : B422056"/>
                     <br />
                     <br />
                     <label htmlFor="last">Phone Number :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="last" name="phone" placeholder="eg : 6969696969"/>
                     <br />
                     <br />
                     <label htmlFor="last">Bio</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="last" name="bio" placeholder="eg : I love IT"/>
                     <br />
                     <br />
                    <button type="submit" onClick={()=>{}} >Submit</button>
                </form>
                </center>
            </div>
            )
}

export default page
