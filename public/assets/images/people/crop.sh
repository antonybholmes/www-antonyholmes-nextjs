for f in `ls *.webp | grep -v circle`
do
	echo ${f}
	python3 crop.py ${f}
done
