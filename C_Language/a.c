#include<stdio.h>
void main(){
    int i,x[10],min,max,sum=0;
    float avg;
    printf("Enter the 10 numbers:\n");
    for(i=0;i<10;i++){
        scanf("%d",&x[i]);
    }
    max = x[0];
    min = x[0];
    for(i=0;i<10;i++){
        if(x[i]>max){
            max = x[i];
        }
        if(x[i]<min){
            min = x[i];
        }
        sum = sum+x[i];
    } //end of for loop
    avg = (float)sum/10.0;
    printf("max = %d  min = %d  avg = %f",max,min,avg);
} //end of main()