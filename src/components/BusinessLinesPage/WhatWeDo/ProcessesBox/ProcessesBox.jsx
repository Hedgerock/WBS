import { useGetContext } from "../../hooks/useGetContext"
import './ProcessesBox.css'

export const ProcessesBox = () => {
    const { setCurrentImg, setCurrentList, setStart, currentList, data, start } = useGetContext();
    const { btnTitles, weDoImg, marketResearch, balticExchange, postFix } = data

    const buttons = [
        {  
            title: 'MARKET RESEARCH',
            list: marketResearch,
            percentage: 5,
        },
        {  
            title: 'BALTIC EXCHANGE',
            list: balticExchange,
            percentage: 45,
        },
        {  
            title: 'POST-FIXING SUPPORT',
            list: postFix,
            percentage: 90,
        }
    ]

    return (
        <div className="processes-box">
            <div className="buttons">
                {
                    buttons.map((button, index) => (
                        <button 
                            className="processes__button"
                            key = { index }
                            disabled = { currentList === button.list }
                            onClick={ () =>{
                            setCurrentImg(weDoImg[index])
                            setCurrentList(button.list)
                            setStart(button.percentage)
                        }}>
                            { btnTitles ? btnTitles[index] : button.title }
                        </button>
                    ))
                }
            </div>
            <div className="loading-line" >
                <div style={ { width: `${start}%`, transition: 'all .3s', background: '#ddad35' } }></div>
                <span 
                    className="loading-line__anchor"
                    style={{left: `${start}%`}}
                ></span>
            </div>
        </div>
    )
}