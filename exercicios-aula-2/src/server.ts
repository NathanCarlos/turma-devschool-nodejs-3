import express, { Request, Response } from 'express';
import cors from 'cors';

const port = 3000;

const app = express();

app.use(cors());

app.use(express.json());

const data = {
    products: [
        {
            id: 1,
            description: 'Notebook S51',
            img: 'https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$',
            price: 5000,
            quantity: 5
        },
        {
            id: 2,
            description: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10',
            img: 'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg',
            price: 3500,
            quantity: 3
        },
        {
            id: 3,
            description: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
            img: 'https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000',
            price: 4000,
            quantity: 2
        },
        {
            id: 4,
            description: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
            img: 'https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388',
            price: 3000,
            quantity: 0
        },
        {
            id: 5,
            description: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
            img: 'https://www.lojaasus.com.br/media/catalog/product/cache/e62f984c1b34771579d59f0076d196f0/0/0/00asus_laptop_x543_cinza_escuro_13_1_8.png',
            price: 3350,
            quantity: 2
        }]
};

app.get('/', (req: Request, res: Response) => {
    res.send({ message: "Hello World" });
});

app.get('/students', (req: Request, res: Response) => {
    const students = [
        {
            name: 'Nathan',
            email: 'nathan@gmail.com'
        },
        {
            name: 'Otavio',
            email: 'otavio@gmail.com'
        },
        {
            name: 'Ricardo',
            email: 'ricardo@gmail.com'
        }
    ];
    res.send(students);
});

// Exercício 2)

app.get('/products', (req: Request, res: Response) => {
    res.send(data);
});

app.post('/products', (req: Request, res: Response) => {
    const product = req.body;
    data.products.push(product);
    res.status(201).send({ message: 'Produto criado com sucesso!' });
});

app.put('/products/:id', (req: Request, res: Response) => {
    const productIndex = data.products.findIndex((p) => p.id === parseInt(req.params.id));

    if(productIndex === -1) return res.status(404).send({ message: 'Produto não encontrado' });

    data.products[productIndex] = req.body;

    res.status(200).send({ message: 'Produto atualizado com sucesso!' });
});

app.delete('/products/:id', (req: Request, res: Response) => {
    const productIndex = data.products.findIndex((p) => p.id === parseInt(req.params.id));

    if(productIndex === -1) return res.status(404).send({ message: 'Produto não encontrado' });

    data.products.splice(productIndex, 1);

    return res.send({ message: "Produto excluído com sucesso!" });
});


app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
