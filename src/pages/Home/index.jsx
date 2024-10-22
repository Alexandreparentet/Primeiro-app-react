import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
// import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import CardImovel from '../../components/CardImovel/CardImovel';



// Page
function Home() {
    return(
        <>
            <Header logo="ImobiTech"/>
            <Nav />
           
           <main>
                <Button titulo="Teste 3"/>

                {/* <section id="imoveis"> */}
                    {/* Adiciona os Cards por JS */}
                    {/* {listaImoveis.forEach((imovel) => {
                   <CardImovel                       
                        id={imovel.id}
                        foto={imovel.fotos[0]}
                        titulo={imovel.titulo}
                        descricao={imovel.descricao}
                        localizacao={imovel.localizacao}
                        quartos={imovel.quartos}
                        area={imovel.area}
                        valo={imovel.valor}
                    />
                })}
                </section> */}

           </main>
           
            {/* <Main 
                titulo="Bem-Vindo(a) à ImobiTech"
                texto1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam illum nisi ipsum odit cum veritatis, incidunt reiciendis consequuntur accusamus, asperiores dolorem facere recusandae facilis sint voluptatibus officiis amet possimus."
           /> */}

            {/* <Main></Main> */}
            
            <Footer contato="contato@imobitech.comc.br"/>

           
            
        </>
    ); 

}

export default  Home;
