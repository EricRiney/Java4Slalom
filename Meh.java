/**
 * fml.java
 */

import java.util.HashMap;
import java.awt.*;
import java.util.Hashtable; // (with a small t in table)
import java.util.Enumeration;

public class Meh {
	public static void main(String[] args) {
		// HashMap<String, Integer> myMap = new HashMap<String, Integer>();
		Hashtable<String, String> h = new Hashtable<String, String>(149, 0.75f);
		h.put( "WA" , "Washington" );
		h.put( "NY" , "New York" );
		h.put( "RI" , "Rhode Island" );
		h.put( "BC" , "British Columbia" );

		String StateAbriv = "NY";
		String stateName = h.get(StateAbriv);
		//System.out.println(stateName);

		// enumerate all the contents of the hashtable
		Enumeration keys = h.keys();
		while ( keys.hasMoreElements() ){
   			StateAbriv = (String)keys.nextElement();
   			stateName = h.get(StateAbriv);
  		 	System.out.println(StateAbriv + " " + stateName );
   			// prints lines of the form NY New York
   			// in effectively random order.
		} // end while
		
	}

}