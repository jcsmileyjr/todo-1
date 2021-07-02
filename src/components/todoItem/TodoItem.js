import "./todoItem.css";
import SuperPen from '../../assets/feather.svg';

const TodoItem = (props) => {
    return(
        <section className="todoItem__layout--style">
            <button class="todoItem__editButton--style">
                <img src={SuperPen} alt="" />
            </button>
            <label class="todoItem__label--style">{props.action}</label>
            <button className="todoItem__deleteButton--style">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 96.52"><title>do-not-litter-symbol</title><path d="M.07,45.55l4-14.8-1.27-.34h0l-.12,0A2.88,2.88,0,0,1,1,29.07H1a2.87,2.87,0,0,1-.29-2.14h0l2.36-8.83h0c0-.05,0-.1,0-.14a2.85,2.85,0,0,1,1.29-1.59,2.78,2.78,0,0,1,2.12-.28h0l1.27.34L11.79,1.81h0a1.22,1.22,0,0,1,.07-.17,2.21,2.21,0,0,1,1-1.18h0A2.22,2.22,0,0,1,14.5.23h0l4.81,1.29A1.23,1.23,0,0,1,20.21,3v0L8,48.71a1.23,1.23,0,0,1-1.5.87h0L1.66,48.29h0l-.14,0h0a2.25,2.25,0,0,1-1.2-1h0a2.2,2.2,0,0,1-.23-1.66v0h0Zm12.3,3.38C20.94,46,20,37.21,23.09,36.34A28.2,28.2,0,0,0,38.84,40l-.06-.15A7.6,7.6,0,0,1,39,37.35,9.31,9.31,0,0,1,40,34.81c1.33-1.59,3.35-2.61,5.26-2v0L51.1,35.2l8.73,3.25c1.2.49,2.25.94,2.91.62,1.42-.67,2.73-2.13,4.25-3.85,3.43-3.86,7.83-8.84,17.27-9.45l2.4-.2c2.07-.2,4.25-.43,6.31-.43a20.8,20.8,0,0,1,12.15,2.74c3.89,2.2,6.88,6,10,9.17l6.55,6.63c2.93,3.54,0,8.16-4.19,8.49-3.35.26-4.81-2.19-7-4.41l-2.84-2.87c-2.13-2.13-5.71-6.67-8.13-7.73-1.26-.55-2.8-.16-4.13-.09l3.72,18.74a9.78,9.78,0,0,1,.14,1.63,9.88,9.88,0,0,1-.89,4.07,19.12,19.12,0,0,1-2.76,4.34c1.77,5.88,4.18,13.27,6.7,20.47,1.21,3.48,2.46,7,3.67,10.2H92.9l-2.33-5.84c-2.48-6.5-4.78-13.32-6.5-19-2.33.64-4.26,1.43-6.63,2.21a50.13,50.13,0,0,0-5,1.87c-1.22.55-2,3.62-2.08,4.78-.09,1.62,0,10,.15,15.94H58.44c-.12-5.31-.21-16,0-17.84,1.18-10.49,6.67-13.07,13.35-16.18A53.82,53.82,0,0,0,78,58.91L75.4,43.67l-.29.31a34,34,0,0,1-3,2.88A15.45,15.45,0,0,1,62,50.66a15.67,15.67,0,0,1-3.34-.36c-1.3-.33-2.61-.69-3.9-1.09s-2.57-.84-3.83-1.31a47.27,47.27,0,0,1-6.65-2.8c-2.82,3-7.64,5.14-8.05,8.69-2.77-1.3-7.07.54-11.77.77H49.25a2.86,2.86,0,0,1,1.72.79,2.54,2.54,0,0,1,.78,1.82.66.66,0,0,1,0,.14v.1l-3.4,36.45v0h0V94l0,.13h0c0,.15-.06.3-.1.43h0v0h0a3.19,3.19,0,0,1-.2.46,2.67,2.67,0,0,1-2.39,1.47H12.07a2.35,2.35,0,0,1-.6-.1,2.87,2.87,0,0,1-.55-.22h0a2.93,2.93,0,0,1-1.46-2.31L6.11,57.42v-.23h0a2.54,2.54,0,0,1,.78-1.82,2.81,2.81,0,0,1,1.73-.79h14c-3.41-.18-7-1.49-10.23-5.63ZM84.54.61A11.44,11.44,0,0,0,80.87,0a11.31,11.31,0,1,0,3.67.61Zm-44.93,62H36.88V88.39h2.73V62.61Zm-8.88,0H28V88.39h2.73V62.61Zm-8.88,0H19.12V88.39h2.73V62.61ZM49,57H8.8a.41.41,0,0,0-.21.1.2.2,0,0,0,0,.08h0v.06l3.34,36.41h0a.48.48,0,0,0,.21.38h0l0,0H45.6a.29.29,0,0,0,.24-.17l0-.09,0-.1v-.06h0l3.39-36.4v-.05a.2.2,0,0,0,0-.08.45.45,0,0,0-.21-.1Zm0,0h0Zm.25.24h0Zm2.44.17h0ZM6.72,30.2,2.49,46l3.42.91L17.52,3.57,14.1,2.65,9.93,18.21v0a1.22,1.22,0,0,1-1.5.87L6,18.44H6a.37.37,0,0,0-.29,0,.41.41,0,0,0-.17.2v0h0L3.12,27.55h0a.37.37,0,0,0,0,.29h0a.39.39,0,0,0,.19.17h0l2.46.66a1.22,1.22,0,0,1,.86,1.5Z"/></svg>
            </button>
        </section>
    );
}

export default TodoItem;