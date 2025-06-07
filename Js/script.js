 const carrosseis = document.querySelectorAll('.curso .carrossel');
        carrosseis.forEach(carrossel => {
            let scrollPosition = 0;
            const itemWidth = 200;
            const totalItems = carrossel.children.length;

            function deslizar() {
                scrollPosition -= 1; // Velocidade do deslize
                if (Math.abs(scrollPosition) >= itemWidth * totalItems) {
                    scrollPosition = 0;
                }
                carrossel.style.transform = `translateX(${scrollPosition}px)`;
            }

            setInterval(deslizar, 30);
        });

        //barras de pesquisas

        const barraDeBusca = document.getElementById('barraDeBusca');
        const sugestoesContainer = document.getElementById('sugestoes');

        // Lista de sugestões - depois ira vir do banco de dados
        const sugestoes = [
            'Programação',
            'Banco de dados',
            'Gestão e negócios',
            'Línguas estrangeiras',
            'Design e ilustração',
            'Inteligência artificial',
            'Saúde',
            'Marketing'
        ];

        barraDeBusca.addEventListener('input', function () {
            const texto = barraDeBusca.value.toLowerCase();
            sugestoesContainer.innerHTML = ''; // Limpa sugestões anteriores

            if (texto) {
                const filtradas = sugestoes.filter(s => s.toLowerCase().includes(texto));

                if (filtradas.length > 0) {
                    sugestoesContainer.style.display = 'block'; // Mostra a div
                    filtradas.forEach(s => {
                        const div = document.createElement('div');
                        div.classList.add('sugestao');
                        div.textContent = s;

                        // Clique na sugestão
                        div.addEventListener('click', () => {
                            barraDeBusca.value = s;
                            sugestoesContainer.innerHTML = '';
                            sugestoesContainer.style.display = 'none'; // Esconde de novo
                            barraDeBusca.focus();
                        });

                        sugestoesContainer.appendChild(div);
                    });
                } else {
                    sugestoesContainer.style.display = 'none'; // Nenhuma sugestão encontrada
                }
            } else {
                sugestoesContainer.style.display = 'none'; // Campo vazio
            }
        });


