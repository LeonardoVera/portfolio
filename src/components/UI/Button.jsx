import './Button.css'

export function Button({ text, onClick, link, downloadName }) {
    return (
        <a href={link} target='_blank' download={downloadName}>
            <button onClick={onClick}>
                {text}
            </button>
        </a>
    )
}