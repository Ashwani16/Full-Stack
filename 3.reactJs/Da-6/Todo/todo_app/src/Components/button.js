export default function Button({text,onclick,disabled,style}){
    return <button style={style} disabled={disabled} onClick={onclick}>{text}</button>
}