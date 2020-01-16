using System; 

class URI {

    static void Main(string[] args) { 

        double n, A, R;
        
        R = double.Parse(Console.ReadLine());
        n = 3.14159;
        
        A = n * R * R;
        
        Console.WriteLine("A={0}", String.Format("{0:0.0000}", A));
        

    }

}