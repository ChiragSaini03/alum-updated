import Alum from "../about/alum";

export default function LoggedIn({ type }) {
  return (
    // <main className=" flex flex-col justify-evenly -mt-4">
    //   <section
    //     className="banner flex flex-row justify-around"
    //     style={{
    //       backgroundImage: "url('/banner.webp')",
    //       width: "100%",
    //       height: "calc(100vh - 60px)",
    //       display: "flex",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       style={{
    //         backgroundColor: "#ffffff61",
    //         width: "100%",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         flexDirection: "column",
    //         padding: 20,
    //       }}
    //     >
    //       <h1 style={{ fontWeight: "bold", fontSize: 35 }}>Welcome</h1>
    //       <div>
    //         <p>
    //           Alumni are the brand ambassadors of their university. The world
    //           recognizes any university by its alumni. The alumni carry the
    //           tradition and value system of their university to the outside
    //           world.
    //         </p>
    //       </div>
    //       <br></br>
    //       <div>
    //         <p>Stay Connected</p>
    //       </div>
    //     </div>
    //   </section>
    //   {/*  */}
    //   <section className="">
    //     <p className="mx-4">
    //       Faculty and students are the bedrocks of any educational Institute. We
    //       at Netaji Subhas University have always been blessed with bright
    //       students and an equally bright and dedicated faculty. Perhaps that is
    //       one of the reasons the university has carved a niche for itself in the
    //       global setting. The journey from Delhi Institute of Technology to
    //       Netaji Subhas University of Technology eventhough an ardous one, yet
    //       has been a very fulfilling one .
    //     </p>
    //   </section>

    //   {/* GALLERY */}
    //   {/* <section className="mt-32">
    //     <h1 className="text-4xl font-bold text-center text-blue-700 ">
    //       Gallery
    //     </h1> */}
    //   <section className="my-24 bg-[#444444] py-8 relative">
    //     <h1 className="text-4xl font-bold text-center text-white absolute left-8 -top-[28px] z-20 bg-blue-700 px-8 p-2 rounded-xl w-[280px]">
    //       <p className="inline">Gallery</p>
    //       <p className="inline pl-20">&gt;</p>
    //     </h1>
    //     <Gallery></Gallery>
    //   </section>

    //   {/*LATEST  NEWS */}
    //   <section className="mb-14 bg-[#eef0f8] w-[92%] p-4 mx-auto relative">
    //     <div className="justify-between max-w-[85vw] mx-auto">
    //       <h1 className="md:text-3xl text-2xl font-bold text-white bg-blue-700 mb-4 absolute -top-[28px] left-0 right-0 mx-auto md:mx-0 md:left-8 px-4 p-2 rounded-xl w-[340px]">
    //         Latest Opportunities
    //       </h1>
    //       <div className="w-full items-center pt-8 flex flex-col">
    //         <div className="py-2">
    //           <p className="font-bold md:text-2xl my-1">
    //             NSUT Secures 60th Rank in NIRF Rankings 2023: Engineering.
    //           </p>
    //           <p className="md:text-xl my-1">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    //             nobis quae explicabo dolores laboriosam assumenda quos,
    //             consequuntur officiis eum optio.
    //           </p>
    //           <p className="md:text-xl my-1">
    //             The Alumni Meet 2019 began with a warm welcome to all the alumni
    //             through a welcome song by the stu- dents of Netaji Subhas
    //             University of Technology followed by the tra- ditional lamp
    //             lighting ceremony by Prof K.P.S Rana, acting Vice-Chan- cellor,
    //             Prof Raj Senani, Ex-Director NSUT, Prof Vijyant Agrawal, Chair-
    //             man of Alumni Affairs, Prof Ritu Sibal, Faculty In charge of
    //             Alumni Meet 2019, Alumni and Faculty NSUT.
    //           </p>
    //           <p className="md:text-xl my-1">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    //             nobis quae explicabo dolores laboriosam assumenda quos,
    //             consequuntur officiis eum optio.
    //           </p>
    //         </div>
    //         <div className="py-2">
    //           <p className="font-bold md:text-2xl my-1">
    //             NSUT Secures 60th Rank in NIRF Rankings 2023: Engineering.
    //           </p>
    //           <p className="md:text-xl my-1">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    //             nobis quae explicabo dolores laboriosam assumenda quos,
    //             consequuntur officiis eum optio.
    //           </p>
    //           <p className="md:text-xl my-1">
    //             The Alumni Meet 2019 began with a warm welcome to all the alumni
    //             through a welcome song by the stu- dents of Netaji Subhas
    //             University of Technology followed by the tra- ditional lamp
    //             lighting ceremony by Prof K.P.S Rana, acting Vice-Chan- cellor,
    //             Prof Raj Senani, Ex-Director NSUT, Prof Vijyant Agrawal, Chair-
    //             man of Alumni Affairs, Prof Ritu Sibal, Faculty In charge of
    //             Alumni Meet 2019, Alumni and Faculty NSUT.
    //           </p>
    //           <p className="md:text-xl my-1">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    //             nobis quae explicabo dolores laboriosam assumenda quos,
    //             consequuntur officiis eum optio.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="flex flex-row justify-between max-w-[85vw] mx-auto">
    //       <div className="flex flex-col w-[800px] items-center ">
    //         <h1 className="text-4xl font-bold text-blue-700 mb-4">
    //           Latest Opportunities
    //         </h1>
    //         <p>NSUT Secures 60th Rank in NIRF Rankings 2023: Engineering.</p>
    //       </div>
    //       <div className="flex flex-col mt-14 pl-8">
    //         <div className="news my-2">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    //           nobis quae explicabo dolores laboriosam assumenda quos,
    //           consequuntur officiis eum optio.
    //         </div>
    //         <div className="news my-2">
    //           The Alumni Meet 2019 began with a warm welcome to all the alumni
    //           through a welcome song by the stu- dents of Netaji Subhas
    //           University of Technology followed by the tra- ditional lamp
    //           lighting ceremony by Prof K.P.S Rana, acting Vice-Chan- cellor,
    //           Prof Raj Senani, Ex-Director NSUT, Prof Vijyant Agrawal, Chair-
    //           man of Alumni Affairs, Prof Ritu Sibal, Faculty In charge of
    //           Alumni Meet 2019, Alumni and Faculty NSUT.
    //         </div>
    //         <div className="news my-2">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    //           nobis quae explicabo dolores laboriosam assumenda quos,
    //           consequuntur officiis eum optio.
    //         </div>
    //       </div>
    //     </div> */}
    //   </section>
    // </main>

    // <div style={{ marginTop: 35 }}>
    //   <center>
    //     <h1 style={{ fontWeight: "bold", fontSize: 24 }}>
    //       Quick Links for {type}
    //     </h1>
    //     <h1 style={{ fontWeight: "bold", fontSize: 24 }}>Upcoming Events</h1>
    //   </center>
    // </div>

    <Alum></Alum>
  );
}