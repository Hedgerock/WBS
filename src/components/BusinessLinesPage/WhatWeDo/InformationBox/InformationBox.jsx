import { useGetContext } from '../../hooks/useGetContext'
import './InformationBox.css'

export const InformationBox = () => {
    const { currentList } = useGetContext();

    return (
        <div className="information-box">
            <ul className="processes-list">
                {
                    currentList.map((item, index) => (
                        <li className="processes-list__element" key={ index }>{ item }</li>
                    ))
                }
            </ul>
        </div>
    )
}