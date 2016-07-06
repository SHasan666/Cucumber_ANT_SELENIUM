
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


public class XLS_List_HashMap {

	
	
	public static void main(String[] args) {

		
		String testdatapath = System.getProperty("user.dir")+"\\ExcelFiles\\TestData.xlsx";
		String testdatasheetname = "5823";
		List<Map<String, String>> testdata = getXlsTable(testdatapath,testdatasheetname);
		
		for(int i=0;i<testdata.size();i++)
		{
			System.out.println(testdata.get(i).get("Name") +"    "+testdata.get(i).get("Value"));
		}
		
		System.out.println("==============================================");
		String ActualResultpath = System.getProperty("user.dir")+"\\ExcelFiles\\ActualResult.xlsx";
		String ActualResultsheetname = "Sheet1";
		List<Map<String, String>> ActualResult = getXlsTable(ActualResultpath,ActualResultsheetname);
		
		for(int i=0;i<ActualResult.size();i++)
		{
			System.out.println(ActualResult.get(i).get("Name") +"    "+ActualResult.get(i).get("Value"));
		}
		
		
		//Checking row count
		
		if(testdata.size()==ActualResult.size())
		{
			System.out.println("row matching ---> "+testdata.size()+" = "+ActualResult.size());
		}else
		{
			System.out.println("row not matching ---> "+testdata.size()+" != "+ActualResult.size());

		}
		
		
		//Also check ordering
		if(testdata.equals(ActualResult))
		{
			System.out.println("Data matching");
		}else
		{
			System.out.println("not matching");
		}
		
		//check row by row with ordering
		for(int i=0;i<testdata.size();i++)
		{
			System.out.println("=============== TESTING------>>> "+testdata.get(i).get("Name") +"    "+testdata.get(i).get("Value")+" =======================");
			if(testdata.get(i).get("Name").equals(ActualResult.get(i).get("Name")) && testdata.get(i).get("Value").equals(ActualResult.get(i).get("Value")))
			{
				System.out.println("Matching --> "+testdata.get(i).get("Name")+" with "+ActualResult.get(i).get("Name")+" ---and---"+testdata.get(i).get("Value")+" with "+ActualResult.get(i).get("Value"));
			}else 
			{
				System.out.println(" !!! NOTTTT Matching --> "+testdata.get(i).get("Name")+" with "+ActualResult.get(i).get("Name")+" ---and---"+testdata.get(i).get("Value")+" with "+ActualResult.get(i).get("Value"));
			}
		}
		
		
		
		
	}

	
	
	
	public static List<Map<String, String>> getXlsTable(String xlsPath , String xlsSheetName)
	{
		
		try{
			Xls_Reader xls = new Xls_Reader(xlsPath);
			
			//System.out.println(xls.getColumnCount(""));
			 
			List<String> columns = new ArrayList<String>(xls.getColumnCount(xlsSheetName));
			    for(int i = 0; i < xls.getColumnCount(xlsSheetName); i++){
			        columns.add(xls.getCellData(xlsSheetName, i, 1));
			    	//System.out.println(xls.getCellData("Sheet1", i, 1));
			    }
			    
			   /* for(int i=0;i<columns.size();i++)
			    {
			    	System.out.println(columns.get(i));
			    }*/    
			    
			    
			List<Map<String,String>> data = new ArrayList<Map<String,String>>();
			for(int rowNum=2;rowNum<=xls.getRowCount(xlsSheetName);rowNum++)
			{
				Map<String,String> row = new LinkedHashMap<String, String>(columns.size());
				for(int colNum=0;colNum<xls.getColumnCount(xlsSheetName);colNum++)
				{
					row.put(columns.get(colNum), xls.getCellData(xlsSheetName, colNum, rowNum));
					//System.out.print(xls.getCellData("Sheet1", colNum, rowNum)+"  ");
				}
				//System.out.println();
				data.add(row);
			}
			return data;
		}catch(Throwable t)
		{
			return null;
		}
		
	}
	
}