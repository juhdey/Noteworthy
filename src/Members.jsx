function Member(props) {
    return <div className="text-center flex flex-col">
        <img src={`src/assets/members/${props.name.split(" ")[0].toLowerCase()}.jpg`}></img>
        <p className="text-xl pt-3">{props.name}</p>
        <i>{props.voice}</i>
    </div>
}

export function Members() {
    return <>
        <h1 className="text-center text-6xl font-bold py-8" name="members"><a style={{ display: 'block', position: 'relative', top: '-75px', visibility: 'hidden' }} name="members"></a>Members</h1>
        <div className="flex flex-col">
            <div className="place-self-center grid grid-cols-3 gap-3 p-5">
                <Member name="Maya Rotenberg" voice="Tenor 1" />
                <Member name="Amanda Sakimura" voice="Tenor 1" />
                <Member name="Alex Pease" voice="Bass" />
                <Member name="Bhaskar Roberts" voice="Tenor 2" />
                <Member name="Ellington Chen" voice="Baritone" />
                <Member name="Justin Wong" voice="Baritone" />
                <Member name="Jerry" voice="Baritone" />
                <Member name="Athena Liu" voice="Tenor 1" />
                <Member name="Stephanus Yang" voice="Tenor 2" />
                <Member name="Kian Chou" voice="Tenor 2" />
                <Member name="Eddie Cekici" voice="Bass and Vocal Percussion" />
                <Member name="Andrew Tran" voice="Tenor 2" />
                <Member name="Ethan Jang" voice="Bass" />
                <Member name="Tom Guan" voice="Baritone" />
                <Member name="Tom Guan" voice="Baritone" />
                <Member name="Madlen Jalalyan" voice="Tenor 1" />
                <Member name="Christopher Yuan" voice="Tenor 2" />
            </div>
        </div>
    </>
}
