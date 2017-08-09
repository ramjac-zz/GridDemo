package main

import (
	"log"
	"net/http"
)

func main() {
	log.Println("So it goes...")

	fs := http.FileServer(http.Dir("web"))
	http.Handle("/", fs)
	log.Fatal(http.ListenAndServe(":8086", nil))
}
