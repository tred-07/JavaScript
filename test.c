#include<stdio.h>
struct St{
    int id,cf_r;
};
int main(){
   struct St cp;
   int a=5,b=1450;
   cp.id=a,cp.cf_r=b;
   printf("%d %d\n",cp.id,cp.cf_r);
}