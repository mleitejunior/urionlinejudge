#define MAX 100

int main()
{
	int n;
	int i,j;
	int xi,yi,xf,yf;
	int mar[MAX][MAX]; // esse e o mapa das posicoes cobertas
	int area = 0;
	
	scanf("%d", &n);
	for(i=0; i<MAX; ++i)
		for(j=0; j<MAX; ++j)
			mar[i][j] = 0;
	
	while(n--)
	{
		scanf("%d %d %d %d",&xi,&xf,&yi,&yf);
		for(i=xi; i<xf; ++i)
			for(j=yi; j<yf; ++j)
				mar[i][j] = 1; // marca todas as posicoes do retangulo
	}

	for(i=0; i<MAX; ++i)
		for(j=0; j<MAX; ++j)
			if(mar[i][j]) // ve se a posicao esta em algum retangulo
				++area; // se estiver, incrementa a area

	printf("%d\n",area);
	
	return 0;
}