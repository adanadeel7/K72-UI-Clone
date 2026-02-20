import React,{useRef} from "react";

function Agence() {
  return (
    <div>
      <div className="section1">
        <div className="h-[20vw] w-[15vw] top-60 absolute  overflow-hidden left-[30vw] rounded-4xl">
          <img
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mt-[55vh] text-white font-[font2]">
          <div className="font-[font2]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="pl-[40%] mt-20">
            <p className="text-6xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre
              créativité. On reste humbles et on dit non aux gros egos, même le
              vôtre. Une marque est vivante. Elle a des valeurs, une
              personnalité, une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. C’est pour ça
              qu’on s’engage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="section2">

      </div>
    </div>
  );
}

export default Agence;
