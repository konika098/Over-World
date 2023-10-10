const TeamDetails = ({ datas }) => {
    const { image, name, tag } = datas
    return (
        <>

         
                <div className="p-4 ">
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src={image} />
                        <div className="w-full">
                            <h2 className="title-font font-medium text-lg text-white">{name}</h2>
                            <h3 className="text-white mb-3">{tag}</h3>
                         
                            
                        </div>

                    </div>
                </div>
            

        </>
    );
};

export default TeamDetails;