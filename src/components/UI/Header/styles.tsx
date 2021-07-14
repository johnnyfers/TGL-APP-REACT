import styled from 'styled-components'

export const Header = styled.header`
padding-top: 10px;
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
padding-left: 100px;
padding-right: 100px;
box-sizing: border-box;
border-bottom: 1px solid rgba(0, 0, 0, 0.123);

@media (max-width: 500px){
    width: 20rem;
    justify-content: center;

}
`

export const Title = styled.li`
    position: absolute;
    bottom: 0;
    font-size: 50px;
    border-bottom: 6px solid #29ce24a2;
    border-radius: 5px;

    @media (max-width: 500px){
    margin-left: 1.5rem;
}
`

export const Home = styled.li`
margin-left: 10rem;

@media (max-width: 500px){
    margin-top: 1rem;
}
`
export const Ul = styled.ul`
    list-style: none;
`

export const Li = styled.li`
    color: rgb(94, 86, 86);
    display: flex;
    font-size: 20px;
    float: left;
    margin-right: 20px;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    
    @media (max-width: 500px){
        margin-bottom: 0.3rem;
    }
`