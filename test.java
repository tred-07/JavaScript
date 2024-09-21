public class test{
    public static void main(String[] args) {
        label_1:{
            label_2:{
                label_3:{
                    for(int i=0;i<100;i++){
                        System.out.println("Inside Label_3");
                        if(i==4)
                         break label_3;
                    }
                }
                System.out.println("Inside Label_2");
            }
            System.out.println("Inside Label_1");
        }
    }
}