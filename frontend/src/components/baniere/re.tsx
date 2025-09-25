export const BaniereHeader=()=>{
    return(
           <div style={{ position: "relative", width: "100%", height: "auto", overflow: "hidden"}} className="bg-blue-500">
                {/* <div
                style={{
                  // position: "absolute",   
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                <h1 className="">Bienvenue sur notre site</h1>
              </div> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "12vh", objectFit: "cover" }}
              >
                <source src="gif.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture des vidéos.
              </video>
            </div>
    )
}