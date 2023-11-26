const TitleComp = ({name, title}) => {
    const tausif = 'uppercase mt-3 md:mt-6 text-2xl md:text-4xl';

    return (
        <div className="dark:bg-slate-600 dark:text-white">
            <h2 className={tausif} style={{color: "blue", marginBottom: "10px"}}>
                {name} {title}
            </h2>
            <p className="max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque beatae doloribus necessitatibus facere porro nisi quia, dolore, dolor at quod illo. Similique sequi deleniti, est deserunt aperiam magnam possimus.
            </p>
        </div>
    );
};

export default TitleComp;