days = int(input());

years = int(days/365);
days -= years*365;

months = int(days/30);
days -= months*30;

print(str(years)+" ano(s)\n"+str(months)+" mes(es)\n"+str(days)+" dia(s)");