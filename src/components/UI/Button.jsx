import './Button.css'

export function Button({ text, onClick, link }) {
    return (
        <a href={link} target='_blank'>
            <button onClick={onClick}>
                {text}
            </button>
        </a>
    )
}