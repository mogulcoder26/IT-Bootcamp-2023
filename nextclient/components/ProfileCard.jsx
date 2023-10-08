/**
 * 
 * @returns about
: 
"Hey Kids,Don't Do Drugs ! <3"
createdAt
: 
"2023-09-22T14:35:47.082Z"
email
: 
"b422056@iiit-bh.ac.in"
github
: 
"zakhaev26"
id
: 
"B422056"
imageKey
: 
"fb45fdcf34a0761a4c562ccbe96310b2"
linkedin
: 
"soubhikgon"
name
: 
"Soubhik Kumar Gon"
__v
: 
0
_id
: 
"650da6430608e94a3f391b6b"
 */

export default function ProfileCard({props}) {
    console.log("p",props)
    const imgUrl = `https://di31z5z4zln8a.cloudfront.net/${props.imageKey}`;
    const Id = props?.id;
    return (
      <>
        <div className="relative w-72 h-72 m-2 flex rounded-xl overflow-hidden hover:scale-105">
          <img
            className="absolute m-0 rounded-xl w-full h-full object-cover border-4 border-[#a838a8]"
            src={imgUrl}
          />
          <div className="w-full flex flex-col justify-between ml-4 mt-2 font-semibold text-2xl z-10">
            <div>
              <div className="font-bold text-white text-2xl z-10">ID</div>
              <div className="font-bold text-white text-2xl z-10">
        {typeof(Id)==='string'?Id[5]+Id[6]:null}</div>
            </div>
            <div className="font-bold text-white text-2xl mb-2 z-10">
              {props.name}
            </div>
          </div>
        </div>
      </>
    );
  }
  