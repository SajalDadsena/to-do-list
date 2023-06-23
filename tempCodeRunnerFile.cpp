#include<bits/stdc++.h>
char* FindMax(int* arr,int size)
{
    string s="";
    for(int i=0; i<size; i++)
    {
         s+=to_string(arr[i]);
    }

    sort(s.rbegin(),s,rend());

    return s[0];
