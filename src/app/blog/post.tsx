

export default function Post({ props } : { props: { postName : string, postAuthor: string }}) {
    return (
        <>
            <div>
                <h2>{props.postName} : {props.postAuthor}</h2>
            </div>
        </>
    )
}