export async function fetchData(url: string,options:object): Promise<any>{
    const response = await fetch(url,options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }


